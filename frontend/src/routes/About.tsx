import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const rewardTiers = [
  {
    tier: "Exact Match 🎯",
    criteria: "Matches the closing price to the cent! 🤯",
    reward: "10,000 points",
  },
  {
    tier: "Near-Exact Match 🔍",
    criteria: "Within $1 of the closing price",
    reward: "2,500 points",
  },
  {
    tier: "Very Close Match 🔥",
    criteria: "Within $10 of the closing price",
    reward: "1,000 points",
  },
  {
    tier: "Close Match 🌟",
    criteria: "Within $100 of the closing price",
    reward: "250 points",
  },
  {
    tier: "Far Match 🚀",
    criteria: "Within $1,000 of the closing price",
    reward: "50 points",
  },
];

const About = () => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Our Prediction Platform! 🌟
      </Typography>
      <Typography variant="body1" paragraph>
        Here's how the rewards work and how you can earn points for your
        accurate Bitcoin price predictions.
      </Typography>

      <Typography variant="h5" gutterBottom>
        How Points Work
      </Typography>
      <Typography variant="body1" paragraph>
        Every time you make a prediction, you have the chance to earn points
        based on how close your guess is to the actual closing price of Bitcoin
        for that day. The closer your prediction, the more points you’ll earn!
      </Typography>

      <Typography variant="h5" gutterBottom>
        Rules for Predictions
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>No Last-Minute Guesses:</strong> You cannot make a guess within
        24 hours of the closing price.
      </Typography>
      <Typography variant="body2" paragraph>
        Example: If the closing price for January 15th will be calculated at
        11:59 PM UTC, your last chance to submit a prediction for that date is
        January 14th at 11:59 PM UTC.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>No Edits Close to the Deadline:</strong> Predictions cannot be
        edited within 24 hours of the closing price. Once your prediction is
        locked, it’s final—no changes allowed.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Reward Tiers
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Tier</strong>
              </TableCell>
              <TableCell>
                <strong>Criteria</strong>
              </TableCell>
              <TableCell>
                <strong>Reward</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rewardTiers.map((tier, index) => (
              <TableRow key={index}>
                <TableCell>{tier.tier}</TableCell>
                <TableCell>{tier.criteria}</TableCell>
                <TableCell>{tier.reward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" gutterBottom>
        Time Bonus ⏳
      </Typography>
      <Typography variant="body1" paragraph>
        The earlier you make your prediction, the more bonus points you’ll earn.
        Why? Because making accurate long-term predictions is much harder than
        short-term guesses! For each day between when you make your prediction
        and the closing date, your points are multiplied by a 5% daily bonus.
      </Typography>
      <Typography variant="body2" paragraph>
        Example: If you make a prediction 30 days in advance and hit an Exact
        Match, you’ll earn 43,200 points! Predict just 5 days early and hit a
        Far Match? That’s 262.5 points with the bonus.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Tips for Maximizing Your Points
      </Typography>
      <Typography variant="body1" paragraph>
        <ul>
          <li>
            <strong>Plan Ahead:</strong> Predict early to take advantage of the
            time bonus multiplier.
          </li>
          <li>
            <strong>Stay Informed:</strong> Keep an eye on market trends and
            news to improve your chances of a Close or Exact Match.
          </li>
          <li>
            <strong>Be Strategic:</strong> Remember that predictions are locked
            and cannot be submitted or edited within 24 hours of the close.
          </li>
        </ul>
      </Typography>

      <Typography variant="h5" gutterBottom>
        What Do Points Get You?
      </Typography>
      <Typography variant="body1" paragraph>
        Points are a measure of your prediction prowess and can be used to climb
        leaderboards, unlock achievements, or gain bragging rights among your
        peers. Stay tuned as we roll out more ways to use your points!
      </Typography>
    </Box>
  );
};

export default About;
