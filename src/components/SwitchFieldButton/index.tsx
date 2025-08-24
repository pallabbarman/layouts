import { styled, Switch, type SwitchProps } from '@mui/material';

export type SwitchFieldButtonProps = SwitchProps;

const SwitchFieldButton = styled((props: SwitchFieldButtonProps) => (
    <Switch {...props} />
))(({ theme }) => ({
    width: 44,
    height: 24,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.moonstone600.main,
                opacity: 1,
                border: 0,
            },
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.white.main,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
            backgroundColor: theme.palette.grey200.main,
            cursor: 'not-allowed',
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 20,
        height: 20,
        boxShadow: '0px 4px 6px -1px #0000001A, 0px 2px 5px 0px #0000000F',
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.grey400.main,
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default SwitchFieldButton;
