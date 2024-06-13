import { Card, CardContent, Typography } from "@mui/material";
import { CardsProps } from "./Cards.interface";
import "./Cards.scss";

const Cards = ({ title, subTitle, action }: CardsProps) => {
    return (
        <>
            <Card sx={{ minWidth: 265 }} className="card" variant="outlined">
                <CardContent className="card-container">
                    <Typography variant="h6" component="div" className="title">
                        {title}
                    </Typography>
                    {subTitle && <Typography variant="h6" component="div" className="sub-title">
                        {subTitle}
                    </Typography>}
                    {action && <Typography variant="h6" component="div" className="action">
                        {action}
                    </Typography>}
                </CardContent>
            </Card>
        </>
    )
};

export default Cards;