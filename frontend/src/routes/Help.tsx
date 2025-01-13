import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Help = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: 1,
      }}
    >
      <Typography variant="body1" paragraph>
        Welcome to the Bitcoin Prediction Game! Here, you can predict the
        Bitcoin closing price for the next day and earn points based on the
        accuracy of your guesses. Whether you're on the Free or Premium tier,
        the more accurate your prediction, the more points you can earn!
      </Typography>

      <Typography variant="h6" gutterBottom>
        How It Works
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Step 1: Choose your tier." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Step 2: Make your prediction for the next day's Bitcoin closing price." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Step 3: Check the leaderboard to see how close your guess was!" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Scoring System
      </Typography>
      <Typography variant="body1" paragraph>
        Your prediction will earn you points based on how close it is to the
        actual Bitcoin closing price:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Exact Match: Earn the highest points!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Within 2%: Earn medium points." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Within 5%: Earn lower points." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Tier Benefits
      </Typography>
      <Typography variant="body1" paragraph>
        Our Premium users enjoy the added benefit of making unlimited guesses,
        while Free-tier users are limited to one prediction per day for dates 24
        hours in the future.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Premium Subscription: Unlock More
      </Typography>
      <Typography variant="body1" paragraph>
        As a Premium user, you’ll enjoy:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Unlimited daily predictions." />
        </ListItem>
        <ListItem>
          <ListItemText primary="More points for accurate guesses!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Access to additional insights and features." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Need More Help?
      </Typography>
      <Typography variant="body1" paragraph>
        If you need further assistance, please reach out to our support team or
        check out the FAQs below:
      </Typography>
    </Box>
  );
};

export default Help;
