module.exports = function (eleventyConfig) {
  // Pass the CMS admin portal and media assets directly to the final build
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site", // This is where the final, compiled website will live
    },
  };
};
