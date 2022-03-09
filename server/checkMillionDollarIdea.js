// Validate idea data
const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = Number(req.body.numWeeks);
    const weeklyRevenue = Number(req.body.weeklyRevenue);
    if (numWeeks * weeklyRevenue >= 1000000) {
        req.body.numWeeks = numWeeks;
        req.body.weeklyRevenue = weeklyRevenue;
        next();
    } else {
        res.status(400).send('This is not a million dollar idea');
    }
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
