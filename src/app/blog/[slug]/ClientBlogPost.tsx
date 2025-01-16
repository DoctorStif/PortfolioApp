"use client";

import { BlogPost, blogPosts } from "@/data/blog-posts";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import TableOfContents from "@/components/TableOfContents";
import ScrollProgress from "@/components/ScrollProgress";
import RelatedPosts from "@/components/RelatedPosts";
import {
  useState,
  useOptimistic,
  ReactNode,
  useTransition,
  useEffect,
} from "react";
import type { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface ClientBlogPostProps {
  post: BlogPost;
  children?: ReactNode;
}

interface ShareNotification {
  type: "success" | "error";
  message: string;
}

interface ShareCount {
  total: number;
  platforms: Record<string, number>;
}

type SocialPlatform = "Twitter" | "LinkedIn" | "Facebook" | "WhatsApp";

const SocialIcons: Record<SocialPlatform, ReactElement> = {
  Twitter: (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Facebook: (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  WhatsApp: (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
};

const PLATFORMS: SocialPlatform[] = [
  "Twitter",
  "LinkedIn",
  "Facebook",
  "WhatsApp",
];

interface TouchPosition {
  x: number;
  y: number;
}

interface ImageTransform {
  scale: number;
  x: number;
  y: number;
}

export default function ClientBlogPost({
  post,
  children,
}: ClientBlogPostProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isMobileShareMenuOpen, setIsMobileShareMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<TouchPosition | null>(null);
  const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [isPending, startTransition] = useTransition();
  const [notification, setNotification] = useState<ShareNotification | null>(
    null
  );
  const [shareCount, setShareCount] = useState<ShareCount>({
    total: 0,
    platforms: {},
  });
  const [imageTransform, setImageTransform] = useState<ImageTransform>({
    scale: 1,
    x: 0,
    y: 0,
  });
  const [initialDistance, setInitialDistance] = useState<number>(0);
  const [initialScale, setInitialScale] = useState<number>(1);
  const [lastTap, setLastTap] = useState<number>(0);
  const [doubleTapPosition, setDoubleTapPosition] =
    useState<TouchPosition | null>(null);

  // Load initial share count from localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem(`blog-share-${post.slug}`);
    if (storedCount) {
      setShareCount(JSON.parse(storedCount));
    }
  }, [post.slug]);

  // Optimistic updates for social interactions
  const [optimisticShares, shareOptimistically] = useOptimistic<
    ShareCount,
    { platform: string }
  >(shareCount, (state, { platform }) => {
    const newPlatformCount = (state.platforms[platform] || 0) + 1;
    return {
      total: state.total + 1,
      platforms: {
        ...state.platforms,
        [platform]: newPlatformCount,
      },
    };
  });

  const handleShare = async (platform: SocialPlatform) => {
    startTransition(() => {
      shareOptimistically({ platform });
    });

    try {
      const shareUrl = `${window.location.origin}/blog/${post.slug}`;
      const title = encodeURIComponent(post.title);
      const url = encodeURIComponent(shareUrl);
      let shareLink = "";

      switch (platform) {
        case "Twitter":
          shareLink = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
          break;
        case "LinkedIn":
          shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${encodeURIComponent(
            post.excerpt
          )}`;
          break;
        case "Facebook":
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
          break;
        case "WhatsApp":
          // Use different URLs for mobile and desktop
          const isMobile = /iPhone|iPad|iPod|Android/i.test(
            navigator.userAgent
          );
          shareLink = isMobile
            ? `whatsapp://send?text=${encodeURIComponent(
                `${post.title}\n\n${shareUrl}`
              )}`
            : `https://wa.me/?text=${encodeURIComponent(
                `${post.title}\n\n${shareUrl}`
              )}`;
          break;
      }

      // Open share dialog
      const shareWindow = window.open(
        shareLink,
        "_blank",
        "width=600,height=400,resizable=yes"
      );

      // Update share count when the share window is closed
      const checkWindowClosed = setInterval(() => {
        if (shareWindow?.closed) {
          clearInterval(checkWindowClosed);
          const newCount = {
            total: shareCount.total + 1,
            platforms: {
              ...shareCount.platforms,
              [platform]: (shareCount.platforms[platform] || 0) + 1,
            },
          };
          setShareCount(newCount);
          localStorage.setItem(
            `blog-share-${post.slug}`,
            JSON.stringify(newCount)
          );

          setNotification({
            type: "success",
            message: `Successfully shared on ${platform}!`,
          });
          setTimeout(() => setNotification(null), 3000);
        }
      }, 1000);
    } catch (error) {
      console.error("Error sharing:", error);
      setNotification({
        type: "error",
        message: `Failed to share on ${platform}. Please try again.`,
      });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const xDiff = touchStart.x - touchEnd.x;
    const yDiff = touchStart.y - touchEnd.y;
    const minSwipeDistance = 50;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (Math.abs(xDiff) > minSwipeDistance) {
        if (xDiff > 0) {
          // Swipe left - go to next post if available
          const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
          if (currentIndex < blogPosts.length - 1) {
            router.push(`/blog/${blogPosts[currentIndex + 1].slug}`);
          }
        } else {
          // Swipe right - go to previous post if available
          const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
          if (currentIndex > 0) {
            router.push(`/blog/${blogPosts[currentIndex - 1].slug}`);
          }
        }
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle pinch-to-zoom
  const handleTouchStartImage = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setInitialDistance(distance);
      setInitialScale(imageTransform.scale);
    }
  };

  const handleTouchMoveImage = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault(); // Prevent default zoom behavior
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );

      const scale = Math.min(
        Math.max(initialScale * (distance / initialDistance), 1),
        3
      );

      setImageTransform((prev) => ({
        ...prev,
        scale,
      }));
    } else if (e.touches.length === 1 && imageTransform.scale > 1) {
      // Pan image when zoomed in
      const touch = e.touches[0];
      const movementX = touch.clientX - (touchStart?.x || 0);
      const movementY = touch.clientY - (touchStart?.y || 0);

      setImageTransform((prev) => ({
        ...prev,
        x: movementX,
        y: movementY,
      }));
    }
  };

  const handleTouchEndImage = () => {
    if (imageTransform.scale <= 1) {
      // Reset transform when zoomed out
      setImageTransform({ scale: 1, x: 0, y: 0 });
    }
  };

  // Handle double-tap zoom
  const handleImageTap = (e: React.TouchEvent) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    const DOUBLE_TAP_DELAY = 300;

    if (tapLength < DOUBLE_TAP_DELAY && tapLength > 0) {
      // Double tap detected
      e.preventDefault();
      const touch = e.touches[0];

      if (imageTransform.scale > 1) {
        // If already zoomed in, zoom out to original size
        setImageTransform({ scale: 1, x: 0, y: 0 });
      } else {
        // Zoom in centered on the double-tap position
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        setDoubleTapPosition({ x, y });
        setImageTransform({
          scale: 2,
          x: (rect.width / 2 - x) * 2,
          y: (rect.height / 2 - y) * 2,
        });
      }
    }

    setLastTap(currentTime);
  };

  // Mobile share menu animations
  const shareMenuVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  // Image modal animations
  const imageModalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <article
      className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ScrollProgress />
      {/* Hide TableOfContents on mobile */}
      <div className="hidden lg:block">
        <TableOfContents />
      </div>

      {/* Mobile-optimized notification toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 px-4 sm:px-6 py-3 rounded-lg shadow-lg z-50 ${
              notification.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            } text-center`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Share Menu */}
      <AnimatePresence>
        {isMobileShareMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={shareMenuVariants}
            className="fixed inset-x-0 bottom-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg z-50 p-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Share this post</h3>
              <button
                onClick={() => setIsMobileShareMenuOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PLATFORMS.map((platform) => (
                <motion.button
                  key={platform}
                  onClick={() => {
                    handleShare(platform);
                    setIsMobileShareMenuOpen(false);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 mb-2">
                    {SocialIcons[platform]}
                  </div>
                  <span className="text-sm">{platform}</span>
                  {optimisticShares.platforms[platform] > 0 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {optimisticShares.platforms[platform]} shares
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal with double-tap zoom */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageModalVariants}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 p-4 flex items-center justify-center touch-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsImageModalOpen(false);
                setImageTransform({ scale: 1, x: 0, y: 0 });
              }
            }}
          >
            <div
              className="relative w-full h-full max-w-4xl mx-auto overflow-hidden"
              onTouchStart={(e) => {
                handleTouchStartImage(e);
                handleImageTap(e);
              }}
              onTouchMove={handleTouchMoveImage}
              onTouchEnd={handleTouchEndImage}
            >
              <motion.div
                style={{
                  scale: imageTransform.scale,
                  x: imageTransform.x,
                  y: imageTransform.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  // Faster animation for double-tap zoom
                  duration: doubleTapPosition ? 0.2 : undefined,
                }}
                className="relative w-full h-full"
                onAnimationComplete={() => {
                  // Reset double-tap position after animation
                  setDoubleTapPosition(null);
                }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                  draggable={false}
                />
              </motion.div>
              <button
                onClick={() => {
                  setIsImageModalOpen(false);
                  setImageTransform({ scale: 1, x: 0, y: 0 });
                }}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Zoom indicator */}
              {imageTransform.scale > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {Math.round(imageTransform.scale * 100)}%
                </div>
              )}

              {/* Double-tap hint (shows briefly when modal opens) */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap"
              >
                Double-tap to zoom
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6 sm:mb-8 group touch-manipulation"
          >
            <motion.svg
              className="w-5 h-5 mr-2 transition-transform"
              whileHover={{ x: -4 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>
            Back to Blog
          </Link>

          <motion.div
            style={{ opacity: headerOpacity, scale: headerScale }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {post.categories.map((category) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 touch-manipulation"
                >
                  {category}
                </motion.span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-0 text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              <span>{post.date}</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span>{post.readTime} read</span>
              <span className="hidden sm:inline mx-2">•</span>
              <motion.div
                className={`flex items-center gap-2 ${
                  isPending ? "opacity-50" : ""
                }`}
                animate={{ scale: isPending ? 0.95 : 1 }}
              >
                <span>{optimisticShares.total} shares</span>
                {optimisticShares.total > 0 && (
                  <div className="flex -space-x-2 overflow-hidden">
                    {Object.entries(optimisticShares.platforms).map(
                      ([platform, count]) =>
                        count > 0 && (
                          <div
                            key={platform}
                            className="w-7 h-7 sm:w-6 sm:h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs ring-2 ring-white dark:ring-gray-800 touch-manipulation"
                            title={`${count} shares on ${platform}`}
                          >
                            {SocialIcons[platform as SocialPlatform]}
                          </div>
                        )
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <ParallaxSection offset={20}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: isImageLoaded ? 1 : 0,
              scale: isImageLoaded ? 1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
            className="relative h-[250px] sm:h-[400px] w-full mb-8 sm:mb-12 rounded-xl overflow-hidden shadow-lg"
            onClick={() => setIsImageModalOpen(true)}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white opacity-0 transform scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>
        </ParallaxSection>

        {children}

        {/* Mobile Share Button */}
        <motion.button
          onClick={() => setIsMobileShareMenuOpen(true)}
          className="fixed bottom-4 right-4 sm:hidden bg-primary-500 text-white p-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </motion.button>

        {/* Desktop Share Section */}
        <div className="hidden sm:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Share this post
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
              {PLATFORMS.map((platform) => (
                <motion.button
                  key={platform}
                  onClick={() => handleShare(platform)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors touch-manipulation ${
                    isPending ? "opacity-50" : ""
                  }`}
                  disabled={isPending}
                >
                  <div className="flex items-center">
                    {SocialIcons[platform]}
                    <span className="whitespace-nowrap text-sm sm:text-base">
                      Share on {platform}
                    </span>
                    {optimisticShares.platforms[platform] > 0 && (
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-primary-100 dark:bg-primary-900 min-w-[1.5rem] text-center">
                        {optimisticShares.platforms[platform]}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Post Description */}
            <div className="mt-12 mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                About this post
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="mt-12">
              <article className="prose dark:prose-invert max-w-none">
                {post.content}
              </article>
            </div>
          </motion.div>
        </div>

        <RelatedPosts currentPost={post} posts={blogPosts} />
      </div>
    </article>
  );
}
