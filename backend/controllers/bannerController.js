const Banner = require('../models/Banner');

// Get Banner Info
exports.getBanner = async (req, res) => {
  try {
    const banner = await Banner.findOne({ where: { id: 1 } });
    res.json(banner);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Update Banner Info
exports.updateBanner = async (req, res) => {
  const { description, link, timer, isVisible } = req.body;
  try {
    let banner = await Banner.findOne({ where: { id: 1 } });

    if (banner) {
      banner.description = description;
      banner.link = link;
      banner.timer = timer;
      banner.isVisible = isVisible;
      await banner.save();
      res.json(banner);
    } else {
      banner = await Banner.create({ description, link, timer, isVisible });
      res.json(banner);
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
