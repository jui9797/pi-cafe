"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  image: string | null;
  date: string;
}

const StarIcon = ({
  filled,
  onClick,
}: {
  filled: boolean;
  onClick?: () => void;
}) => (
  <svg
    onClick={onClick}
    className={`w-8 h-8 cursor-pointer transition-colors ${filled ? "text-[#FFB703]" : "text-gray-300 dark:text-gray-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const StarIconSmall = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-[#FFB703]" : "text-gray-300 dark:text-gray-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function ReviewsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].reviews;

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      userName: "Alex Johnson",
      rating: 5,
      comment:
        "Absolutely love the pour-over here! The beans are roasted to perfection and the atmosphere is so cozy.",
      image: null,
      date: new Date().toLocaleDateString(),
    },
    {
      id: "2",
      userName: "Samantha Lee",
      rating: 4,
      comment:
        "Great spot for working. The matcha latte was delicious, though a bit sweet for my taste.",
      image: null,
      date: new Date().toLocaleDateString(),
    },
    {
      id: "3",
      userName: "Michael Chen",
      rating: 5,
      comment:
        "Best pastries in town, hands down. Paired with a flat white, it is my perfect morning routine.",
      image: null,
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }
    if (!comment.trim()) {
      alert("Please enter a comment.");
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      userName,
      rating,
      comment,
      image: imagePreview,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);

    // Reset form
    setUserName("");
    setRating(0);
    setComment("");
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="w-full py-10 lg:py-16 px-4 md:px-16 bg-white dark:bg-[#1a120e]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Form Section */}
        <div className="w-full lg:w-1/3 bg-[#FFF8F0] dark:bg-[#2a1f1a] p-4 rounded-xl shadow-sm border border-[#C4A484]/20 h-fit lg:sticky lg:top-24">
          <div className="mb-2">
            <h2 className="text-3xl lg:text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#6F4E37] dark:text-[#C4A484] mb-2">
              {t.shareTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t.shareSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#6F4E37] dark:text-gray-200">
                {t.yourName}
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="John Doe"
                className="w-full p-2 lg:p-4 rounded-xl border border-[#C4A484]/30 bg-white/70 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] transition-all"
              />
            </div>

            {/* Rating Selection */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#6F4E37] dark:text-gray-200">
                {t.overallRating}
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    filled={star <= rating}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#6F4E37] dark:text-gray-200">
                {t.yourReview}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="..."
                rows={4}
                className="w-full p-2 lg:p-4 rounded-xl border border-[#C4A484]/30 bg-white/70 dark:bg-black/30 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] resize-none transition-all"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#6F4E37] dark:text-gray-200">
                {t.attachPhoto}
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="block w-full text-sm text-gray-500
                    file:me-4 file:py-2.5 file:px-4
                    file:rounded-xl file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#6F4E37]/10 file:text-[#6F4E37]
                    hover:file:bg-[#6F4E37]/20
                    cursor-pointer"
                />
              </div>

              {imagePreview && (
                <div className="mt-4 relative w-full h-40 rounded-xl overflow-hidden group">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition-colors backdrop-blur-sm"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2 rounded-xl bg-[#6F4E37] text-white font-semibold hover:bg-[#5a3f2d] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#6F4E37]/20 active:translate-y-0"
            >
              {t.postReview}
            </button>
          </form>
        </div>

        {/* Carousel Section */}
        <div className="w-full lg:w-2/3 overflow-hidden flex flex-col justify-center">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-3xl lg:text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#6F4E37] dark:text-[#C4A484]">
              {t.title}
            </h2>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() =>
                  document
                    .getElementById("reviews-carousel")
                    ?.scrollBy({ left: -320, behavior: "smooth" })
                }
                className="w-10 h-10 rounded-xl border border-[#C4A484] flex items-center justify-center text-[#6F4E37] hover:bg-[#C4A484]/10 transition-colors"
              >
                &larr;
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("reviews-carousel")
                    ?.scrollBy({ left: 320, behavior: "smooth" })
                }
                className="w-10 h-10 rounded-xl border border-[#C4A484] flex items-center justify-center text-[#6F4E37] hover:bg-[#C4A484]/10 transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div
            id="reviews-carousel"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 no-scrollbar "
            style={{ scrollBehavior: "smooth" }}
          >
            {reviews.length === 0 ? (
              <div className="w-full p-12 text-center rounded-xl border-2 border-dashed border-[#C4A484]/30">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.noReviews}
                </p>
              </div>
            ) : (
              reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="min-w-[300px] sm:min-w-[340px] w-[300px] sm:w-[340px] shrink-0 snap-center bg-[#FFF8F0] dark:bg-[#2a1f1a] rounded-xl p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-[#C4A484]/20 flex flex-col gap-5 transition-transform hover:-translate-y-2 duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#6F4E37] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                        {rev.userName.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[15px] font-bold text-[#6F4E37] dark:text-[#C4A484]">
                          {rev.userName}
                        </h3>
                        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                          {rev.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1 bg-white/50 dark:bg-black/20 px-2 py-1 rounded-full">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIconSmall key={star} filled={star <= rev.rating} />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-[14px] leading-relaxed flex-grow font-medium">
                    {rev.comment}
                  </p>

                  {rev.image && (
                    <div className="w-full h-48 rounded-xl overflow-hidden mt-2 relative group">
                      <Image
                        src={rev.image}
                        alt="Review photo"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Mobile scroll instruction */}
          {reviews.length > 1 && (
            <div className="sm:hidden flex items-center justify-center gap-2 text-sm text-gray-400 mt-2">
              <span>{t.swipeMore}</span>
              <span className="animate-pulse">&rarr;</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
