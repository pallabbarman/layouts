import Box from '@mui/material/Box';
import MuiCircularProgress, {
    type CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material/CircularProgress';

export type CircularProgressProps = MuiCircularProgressProps;

const CircularProgress = ({ ...props }: CircularProgressProps) => {
    return (
        <Box textAlign="center" p={3}>
            <MuiCircularProgress {...props} />
        </Box>
    );
};

export default CircularProgress;
