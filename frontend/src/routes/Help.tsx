import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Help = () => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Help & FAQs
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Help section! Here, you'll find answers to common
        questions and tips for getting started with the platform. If you need
        further assistance, feel free to contact support.
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How do I make a prediction?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To make a prediction, navigate to the "Predictions" page, select a
            date, and input your guess for Bitcoin's closing price. Remember,
            predictions cannot be submitted or edited within 24 hours of the
            closing price.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">When are predictions locked?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Predictions are locked 24 hours before the closing price for a given
            day. For example, if the closing price for January 15th is
            calculated at 11:59 PM UTC, the last time to submit or edit your
            prediction is January 14th at 11:59 PM UTC.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">
            What happens if I guess incorrectly?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Don’t worry! You’ll still earn points based on how close your guess
            is to the actual closing price. Check out the "Reward Tiers" section
            for details on how points are awarded.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">What is the Time Bonus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Time Bonus rewards users who make predictions early. For every
            day between your prediction and the closing date, your points are
            multiplied by a 5% daily bonus. The earlier you predict, the more
            you can earn!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">How are points calculated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Points are awarded based on how close your prediction is to the
            actual closing price. Different tiers provide different rewards,
            ranging from 50 points for a Far Match to 10,000 points for an Exact
            Match. Additional points can be earned through the Time Bonus.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Can I edit my prediction?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, but only before the 24-hour lock period. Once predictions are
            locked, they cannot be edited.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Who can I contact for support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you need assistance, please contact our support team at{" "}
            <a href="mailto:support@example.com">support@example.com</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Help;
