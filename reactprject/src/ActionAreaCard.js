import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import card1 from "./Card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import card4 from "./card4.jpg";
import card5 from "./card5.jpg";
import card6 from "./card6.jpg";

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
      <Grid item>
        <Card sx={{ maxWidth: 340,marginLeft:"300px",transition: "transform 0.3s ease-out",
  "&:hover": { transform: "scale(0.95)",
    "&:hover .MuiCardActionArea-root": { backgroundColor: "pink" }}}}>
          <CardActionArea className='MuiCardActionArea-root'>
            <CardMedia
              component="img"
              height="140"
              image= {card1}
              alt="Receipt"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Receipt Development
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Receipt development refers to the process of creating, managing, and generating receipts, whether for physical transactions or digital payments.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      
      <Grid item>
        <Card sx={{ maxWidth: 340,marginLeft:"30px" ,maxHeight:290,transition: "transform 0.3s ease-out",
  "&:hover": { transform: "scale(0.95)",
    "&:hover .MuiCardActionArea-root": { backgroundColor: "pink" }}}}>
          <CardActionArea className='MuiCardActionArea-root'>
            <CardMedia
              component="img"
              height="140"
              image={card2}
              alt="Payments"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Payments
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Managing payments is a crucial aspect of any business, whether online or offline. It involves handling transactions efficiently, ensuring security and integrating payment gateways.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 340,maxHeight:290,marginLeft:"295px",marginTop:"30px",transition: "transform 0.3s ease-out",
  "&:hover": { transform: "scale(0.95)",
    "&:hover .MuiCardActionArea-root": { backgroundColor: "pink" }}}}>
          <CardActionArea className='MuiCardActionArea-root'>
            <CardMedia
              component="img"
              height="140"
              image={card3}
              alt="Payments"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Bills
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              A bill is a document that lists the details of a transaction, usually requesting payment for goods provided.
              Bills are financial documents that record the amount owed for goods.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 340,maxHeight:290,marginLeft:"30px",marginTop:"30px",transition: "transform 0.3s ease-out",
  "&:hover": { transform: "scale(0.95)",
    "&:hover .MuiCardActionArea-root": { backgroundColor: "pink" }}}}>
          <CardActionArea className='MuiCardActionArea-root'>
            <CardMedia
              component="img"
              height="140"
              image={card4}
              alt="Finance"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Finance
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               Finance is the management of money, investments, and financial activities, including budgeting, banking, investments, credit, and risk management.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 340,maxHeight:290,marginLeft:"295px",marginTop:"30px",transition: "transform 0.3s ease-out",
  "&:hover": { transform: "scale(0.95)",
    "&:hover .MuiCardActionArea-root": { backgroundColor: "pink" }}}}>
          <CardActionArea className='MuiCardActionArea-root'>
            <CardMedia
              component="img"
              height="140"
              image={card5}
              alt="Payments"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
             Money Management
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Money management is essential,Save to your future helps effectively.Develop your Money management technique.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 340,maxHeight:290,marginLeft:"30px",marginTop:"30px",transition: "transform 0.3s ease-out",
  "&:hover": { transform: "scale(0.95)",
    "&:hover .MuiCardActionArea-root": { backgroundColor: "pink" }}}}>
          <CardActionArea className="MuiCardActionArea-root">
            <CardMedia
              component="img"
              height="140"
              image={card6}
              alt="Savings"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Savings
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Good saving habits can lead to financial stability and security.Track your income and expenses to understand where your money goes.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
