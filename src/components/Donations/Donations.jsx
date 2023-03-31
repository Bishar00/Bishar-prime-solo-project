import React from 'react';
import { Card, CardContent, CardActions, Button } from '@mui/material';

function Donations(){
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

    const packages = [
        { name: 'Basic', price: 10, features: ['Free T-Shirt', 'Bonus Content', 'Monthly Update'] },
        { name: 'Standard', price: 50, features: ['Newsletter', 'Meet Arrivals', 'Event Tickets'] },
        { name: 'Premium', price: 100, features: ['Free Merch', 'Volunteering Opportunity ', 'Event Tickets'] }
    ];

    

    const handleSubscribe = (packageName) => {
        // Implement subscription logic here
    }



    
    return (
        <div className='Donations-container'>
            <h3>Thank you for your support </h3>
            <div style={{ display: 'flex',  padding: '10px' }}>
                {packages.map((pkg, index) => (
                    <div key={index} style={{ width: '30%', margin: '10px ' }}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <h3>{pkg.name} Package</h3>
                                <div className="price">${pkg.price}</div>
                                <ul>
                                    {pkg.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleSubscribe(pkg.name)}>Donate</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Donations;




