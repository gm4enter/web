import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  tableContainer: {
    '.MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-e66yx5-MuiTableCell-root': {

    },
  },

});

interface RowData {
  id: number;
  name: string;
  data: {
    id: number;
    date: string | number,
    explain: string,
    echarge: string | number,
    use: string | number,
    balance: string | number;
  }[];
};

interface Props {
  data: RowData[];
}

export const HistoryTable = (props: Props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <div>
      {data.map((item, index) => (
        <div>
          <p style={{ padding: '10px 16px', margin: 0, backgroundColor: 'rgba(112, 119, 127, 0.2)', borderRadius: '4px', fontSize: '16px', fontWeight: 500 }}>{item.name}</p>
          <Table className={classes.tableContainer}>
            <TableHead>
              <TableRow>
                <TableCell>날짜</TableCell>
                <TableCell>설명</TableCell>
                <TableCell>충전</TableCell>
                <TableCell>사용</TableCell>
                <TableCell>잔액</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell >{row.date}</TableCell>
                  <TableCell>{row.explain}</TableCell>
                  <TableCell>{row.echarge}</TableCell>
                  <TableCell>{row.use}</TableCell>
                  <TableCell>{row.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      ))}
    </div>

  );
}
