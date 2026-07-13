module.exports = function(eleventyConfig) {
  // Pass the CMS admin portal and media assets directly to the final build
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk", // Forces Eleventy to read Nunjucks syntax inside HTML files
    dir: {
      input: "src",
      output: "_site"
    }
  };
};