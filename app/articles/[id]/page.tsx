"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowRightIcon,
  FacebookIcon2,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/icons";
import Button from "@/components/buttons";
import Link from "next/link";
import { useGetArticle, useGetArticles } from "@/lib/hooks/api/queries";
import LoadingSkeleton from "@/components/loadingSkeleton";

const socialLinks = [
  {
    name: "WhatsApp",
    link: `https://wa.me/?text=${encodeURIComponent(
      "Check this out: " + window.location.href
    )}`,
    simpleIcon: (
      <WhatsappIcon stroke="#25D366" fill="#25D366" className="h-5 w-5" />
    ),
  },
  {
    name: "Facebook",
    link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    simpleIcon: <FacebookIcon2 fill="#0866FF" />,
  },
  {
    name: "X",
    link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      "Check this out: " + window.location.href
    )}`,
    simpleIcon: <TwitterIcon fill="#000000" />,
  },
];

const ArticleDetails = () => {
  const { id } = useParams();
  const { data: article, isPending } = useGetArticle(id as string);
  const { data: articles } = useGetArticles();

  if (isPending) {
    <LoadingSkeleton count={1} type="Article" />;
  }
  return (
    <section className=" relative  top-28  md:top-40 px-4 lg:px-28 pb-40 items-center overflow-hidden">
      <div>
        <div className="flex flex-col md:flex-row gap-2 justify-between md:items-center my-4 ">
          <div className=" hidden md:flex md:items-center text-sm text-textPrimary mb-4">
            <Link className="" href={"/articles"}>
              {" "}
              <span className="text-primary">Articles</span>
            </Link>
            <ArrowRightIcon className="h-2 w-2 mx-2" />
            <span>{article?.Title}</span>
          </div>
          <div className="flex items-center  gap-2">
            <span className="text-primary">Share via:</span>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                title={`Share via ${social.name}`}
              >
                {social.simpleIcon}
              </a>
            ))}
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {article?.Title}
        </h1>
        <p className="text-textPrimary mb-6">
          {" "}
          {article?.createdAt &&
            new Date(article.createdAt).toLocaleDateString()}
        </p>
        <div className="w-full h-[40rem] relative mb-8">
          <Image
            src={article?.articleImage1Url || "/"}
            alt="Hands-Free Waste Disposal"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none  mt-6">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              {article?.Subtitle1}
            </h2>

            <p className="text-gray-700 mb-8">{article?.Content1}</p>
          </div>

          {article?.Content2 && (
            <div className="prose max-w-none  mt-6">
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                {article?.Subtitle2}
              </h2>

              <p className="text-gray-700 mb-8">{article?.Content2}</p>

              {article?.articleImage2Url && (
                <div className="relative bg-sky-100 w-full h-[28rem] rounded-lg mb-8">
                  <Image
                    src={article?.articleImage2Url || "/"}
                    alt="Hands-Free Waste Disposal"
                    layout="fill"
                    priority
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          )}
          {article?.Content3 && (
            <div className="prose max-w-none  mt-6">
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                {article?.Subtitle3}
              </h2>

              <p className="text-gray-700 mb-8">{article?.Content3}</p>

              {/* Waste Bins Image */}
              {article?.articleImage3Url && (
                <div className="relative bg-sky-100 w-full h-[28rem] rounded-lg mb-8">
                  <Image
                    src={article?.articleImage3Url || "/"}
                    alt="Hands-Free Waste Disposal"
                    layout="fill"
                    priority
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          )}
          {article?.Content4 && (
            <div className="prose max-w-none  mt-6">
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                {article?.Subtitle4}
              </h2>

              <p className="text-gray-700 mb-8">{article?.Content4}</p>

              {/* Waste Bins Image */}
              {article?.articleImage4Url && (
                <div className="relative bg-sky-100 w-full h-[28rem] rounded-lg mb-8">
                  <Image
                    src={article?.articleImage4Url || "/"}
                    alt="Hands-Free Waste Disposal"
                    layout="fill"
                    priority
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar - Takes up 1 column */}
        <div className="lg:col-span-1 ">
          <div className="mb-8 p-4 border rounded-lg border-gray-300">
            <h3 className="font-semibold mb-4 md:text-xl ">Related Posts</h3>
            <ul className="space-y-3">
              {articles &&
                articles.map((post, index) => (
                  <li key={index} className="border-b border-gray-300">
                    <a
                      href={`/articles/${post._id}`}
                      className="text-gray-700 hover:text-primary transition-colors block"
                    >
                      {post.Title}
                    </a>
                  </li>
                ))}
            </ul>
            <a
              href={`/articles`}
              className="text-primary font-semibold hover:underline flex items-center mt-2"
            >
              See More Articles{" "}
              <span className="ml-2 text-primary ">&rarr;</span>
            </a>
          </div>

          {/* Testimonial */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url(/community-slider.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-r from-[#023022E8]/90 via-[#157D18B8]/48 to-[#157D18B8]/70 bg-[#157D18]/60 md:bg-transparent " />
            <div className="relative z-10 text-left px-4 text-white max-w-5xl mx-auto py-16">
              <p className="text-2xl md:text-4xl text-white font-medium italic mb-4">
                “This was disposal body has opened my eyes to the rules and
                regulations that go along with all aspects of a healthcare
                facility. It makes compliance so easy.”
              </p>
              <p className="text-lg font-medium text-secondary">
                Dr. Johnson Titus
                <br />
                <span className="text-secondary/70">
                  MD Lando Recycling Industrial Limited
                </span>
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-primary/10 p-6 rounded-lg text-center mb-8">
            <h3 className="font-semibold mb-2 text-lg md:text-2xl ">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Tips, stories, and new approaches to work management,
              collaboration, and productivity. Get them weekly to your inbox.
            </p>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 mb-2 border rounded"
            />
            <Button variant="primary" className="w-full text-white">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
