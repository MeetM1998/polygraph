import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import './PeopleInvest.scss';

const PeopleInvest = () => {
  return (
    <Grid className='people-invest-container' container spacing={3} marginTop={1}>
      <Grid item xs>
        <div className='gridCardLarge'>
          <div className='gridCardHeaderInner'>
            People invest in people
          </div>
          <div className='gridCardContentInner'>
            Voice tone analysis is an important tool for understanding the
            leadership team of a public company. It can provide insights
            into the sentiment and confidence of the team, and can be used
            to assess the team s behavior and performance. In particular,
            voice tone analysis can help detect subtle clues in the
            leadership team s speech that could reveal potential problems or
            weaknesses in the company. Additionally, voice tone analysis can
            be used to gauge the team s emotional state and can provide
            valuable insights into the team s overall performance.
          </div>
          <div>
            <TableContainer component={Paper} className="tableContainer">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Tenure at Company</TableCell>
                    <TableCell>Previous Position</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className='tdFirst'>01</TableCell>
                    <TableCell>Satya Nadella</TableCell>
                    <TableCell>47</TableCell>
                    <TableCell>Chairman and Chief Executive Officer</TableCell>
                    <TableCell>6 years</TableCell>
                    <TableCell>
                      Executive Vice President of Microsoft’s Cloud and
                      Enterprise group.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='tdFirst'>02</TableCell>
                    <TableCell>Judson Althoff</TableCell>
                    <TableCell>53</TableCell>
                    <TableCell>
                      Executive Vice President and Chief Commercial Officer
                    </TableCell>
                    <TableCell>7 years</TableCell>
                    <TableCell>President of Microsoft North America.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='tdFirst'>03</TableCell>
                    <TableCell>Chris Capossela </TableCell>
                    <TableCell>51</TableCell>
                    <TableCell>
                      Executive Vice President and Chief Marketing Officer
                    </TableCell>
                    <TableCell>4 years</TableCell>
                    <TableCell>
                      Corporate Vice President of Microsoft’s Consumer
                      Channels Group.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='tdFirst'>04</TableCell>
                    <TableCell>Kathleen Hogan</TableCell>
                    <TableCell>53</TableCell>
                    <TableCell>Executive Vice President and Chief People Officer</TableCell>
                    <TableCell>4 years</TableCell>
                    <TableCell>
                      Corporate Vice President of Microsoft’s Human Resources
                      group.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='tdFirst'>05</TableCell>
                    <TableCell>Amy Hood</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>Executive Vice President and Chief People Officer</TableCell>
                    <TableCell>7 years</TableCell>
                    <TableCell>
                      Chief Financial Officer of Microsoft Global Business
                      Services.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='tdFirst'>06</TableCell>
                    <TableCell>Jean Philippe Courtois </TableCell>
                    <TableCell>58</TableCell>
                    <TableCell>
                      Executive Vice President and President, Microsoft Global
                      Sales, Marketing and Operations
                    </TableCell>
                    <TableCell>3 years</TableCell>
                    <TableCell>President of Microsoft International.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='tdFirst'>07</TableCell>
                    <TableCell>Brad Smith</TableCell>
                    <TableCell>58</TableCell>
                    <TableCell>President and Chief Legal Officer</TableCell>
                    <TableCell>18 years</TableCell>
                    <TableCell>Senior Vice President and General Counsel.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default PeopleInvest