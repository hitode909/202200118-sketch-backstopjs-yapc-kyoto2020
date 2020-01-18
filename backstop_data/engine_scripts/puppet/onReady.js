module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // disable transition
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    * {
      transition-duration: 0s !important;
    }
    `
    document.body.append(style);
  });

  // add more ready handlers here...
};
