import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

/**
 * Simple wrapper around Helmet for per-page <title> and meta description.
 * Usage: <SEO title="..." description="..." />
 */
const SEO: React.FC<SEOProps> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
