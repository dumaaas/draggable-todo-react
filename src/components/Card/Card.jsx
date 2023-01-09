import { useDrag } from 'react-dnd'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function DragCard({ title, smallDescription, bigDescription, date, id, status }) {
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log(event.currentTarget)
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(false);
      };

    const [{ isDragging }, dragRef] = useDrag(
        () => ({
            type: 'card',
            item: { id: id },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }),
        []
    )

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const deleteItem = (id) => {
        var cardsCopy = JSON.parse(localStorage.getItem('todoCards'));
        var itemIndex = cardsCopy.indexOf(card => card.id === id);
        cardsCopy.splice(itemIndex, 1);
        localStorage.setItem('todoCards', JSON.stringify(cardsCopy));
        console.log('jer ko mu', id, 'lista', JSON.parse(localStorage.getItem('todoCards')))
        handleClose();
    }

    const changeCardStatus = (id) => {
        var cardCopy = JSON.parse(localStorage.getItem('todoCards'));
        var dragedCard = cardCopy.findIndex((card) => card.id === id);
        cardCopy[dragedCard].status = !cardCopy[dragedCard].status;
        localStorage.setItem('todoCards', JSON.stringify(cardCopy));
        handleClose();
    }

    return (
        <Card ref={dragRef} style={{ boxShadow: isDragging ? "0 0 0 1px pink" : "0px 0px 0px 0px #fff" }} sx={{ cursor: 'move', maxWidth: '100%', backgroundColor: '#1E1E1E', marginBottom: '20px' }}>
            <CardHeader
                avatar={
                    <Avatar src="https://media.licdn.com/dms/image/C5603AQGy9gp1iaz7Hw/profile-displayphoto-shrink_200_200/0/1624287673624?e=1678924800&v=beta&t=NcpYepexbvFE5rRbY6Funjt0tsT9i-E0DS4Vo9j5uDY" alt="avatar">
                        
                    </Avatar>
                }
                action={
                    <IconButton sx={{ color: 'white' }} aria-label="settings" id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    
                }
                title={title}
                subheader={<Typography className="text-white text-opacity-70">{date}</Typography>}
                sx={{ color: 'white' }}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => deleteItem(id)}>Delete</MenuItem>
                <MenuItem onClick={() => changeCardStatus(id)}>Move to {status ? 'to do' : 'done'}</MenuItem>
            </Menu>
            <CardContent>
                <Typography variant="body2" className="text-white text-opacity-70">
                    {smallDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" sx={{ color: 'white' }}>
                    <DeleteIcon onClick={() => deleteItem(id)} />
                </IconButton>
                <IconButton aria-label="share" sx={{ color: 'white' }}>
                    <>
                        {status && <BackspaceIcon onClick={() => changeCardStatus(id)} />}
                        {!status && <CheckIcon onClick={() => changeCardStatus(id)} />}
                    </>
                </IconButton>
                <ExpandMore
                    sx={{ color: 'white' }}
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="text-white">
                    <Typography paragraph>{title}</Typography>
                    <Typography paragraph>
                        {bigDescription}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}