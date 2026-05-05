import type { MetadataRoute } from "next";

const baseUrl = "https://pantheondigitals.com";

const routes = [
  "",
  "/About",
  "/Ai",
  "/Contact_Us",
  "/Projects",
  "/Support",
  "/Terms-Of-Use",
  "/Services/application-development",
  "/Services/branding-and-ads",
  "/Services/brochure-and-ppt",
  "/Services/cloud-and-devops",
  "/Services/crm",
  "/Services/epr",
  "/Services/epr/battery-waste",
  "/Services/epr/e-waste",
  "/Services/epr/plastic-waste",
  "/Services/epr/used-oil",
  "/Services/epr/waste-tyre",
  "/Services/google-ppc",
  "/Services/logo-designing",
  "/Services/meta-ads",
  "/Services/post-designing",
  "/Services/posts-and-reels",
  "/Services/seo",
  "/Services/social-management",
  "/Services/software-development",
  "/Services/ui-ux",
  "/Services/website-development",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/Services/epr" ? 0.9 : 0.8,
  }));
}
