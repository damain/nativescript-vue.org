function plugin(opts) {

  return function (files, metalsmith, done) {
    const links = [];

    Object.keys(files).forEach((file) => {
      const data = files[file];
      if(data.path) {
        links.push(`/${data.path}`)
      }
    });

    metalsmith.metadata().links = links;
    done();
  }
}

module.exports = plugin;