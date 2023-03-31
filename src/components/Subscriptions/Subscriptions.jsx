import React from "react";
import { Card, CardContent, CardActions, Button } from "@mui/material";
import "./Subscriptions.css";

function Subscriptions() {
  const packages1 = [
    {
      name: "Basic",
      price: 10,
      features: ["Bonus Content", "Monthly Vlog", "Exclusive Community"],
    },
    {
      name: "Standard",
      price: 20,
      features: ["Bonus Content", "Weekly Vlog", "Discounted Merch"],
    },
    {
      name: "Premium",
      price: 30,
      features: ["Exclusive advice", "Daily vlogs", "Direct Message"],
    },
  ];

  const handleSubscribe1 = (packageName) => {
    // Implement subscription logic here
  };

  return (
    <div className="subscriptions">
      <h3>Choose a package</h3>
      <div style={{ display: "flex", padding: "10px" }}>
        {packages1.map((pkg, index) => (
          <div key={index} style={{ width: "30%", margin: "10px " }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <h3>{pkg.name} Package</h3>
                <div className="price">${pkg.price}/month</div>
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li className="hide" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleSubscribe1(pkg.name)}>
                  Subscribe
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscriptions;
