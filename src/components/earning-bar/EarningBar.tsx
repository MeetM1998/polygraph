import { Divider, Rating, Tooltip, Typography } from "@mui/material";
import "./EarningBar.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const EarningBar = () => {
    return (
        <>
            <div className="earningBarContainer">
                <Typography variant="h6" component="h6">
                    EARNINGS POLYGRAPH
                </Typography>
                <div className="iconContainer">
                    <Tooltip title={
                        <div className="tooltip-container">
                            <Typography variant="h6" component="h6" className="tooltip-header">
                                Company Average Rating
                            </Typography>
                            <span>
                                Trailing 4 Quarters
                            </span>
                        </div>
                    }>
                        <ArrowDropDownIcon className="downArrow" />
                    </Tooltip>
                </div>
                <div className="earningBarMain">
                    <div className="earningRoundOuter">
                        <div className="earningRound">
                            <Tooltip title={
                                <div className="tooltipContainer">
                                    <Typography variant="h6" component="h6" className="tooltip-header">
                                        This event's rating
                                    </Typography>
                                    <div className="tooltip-text-container">
                                        <span>1.5</span> <Rating readOnly value={1.5} precision={0.5} />
                                    </div>
                                </div>
                            }>
                                <div className="earningSubRound" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="textContainer">
                    <div>
                        <Divider orientation="vertical" className="verticalLeftDivider" />
                        <div>Bearish</div>
                    </div>
                    <div>
                    <Divider orientation="vertical" className="verticalRightDivider" />
                        <div>Bullish</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default EarningBar;