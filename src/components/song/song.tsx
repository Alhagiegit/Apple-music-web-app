import React,{FC, useState} from "react";
import { Song} from "../../Models/music";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, IconButton } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: 20,
    marginTop: 20
  },
  media: {
    height: 100,
  },
});

type MediaCardProps={song:Song};
const SingleSongCard: FC<MediaCardProps>=({song})=> {
    const [is_playing, setPlaying]=useState(false)
    const [play, setPlay]=useState(false)
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={song.artworkUrl100}
                title={song.artistName}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                {song.artistName}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                {song.trackName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <span>
                    {song.primaryGenreName} - {song.releaseDate}
                    </span>
                </Typography>
                <audio  controls={true} autoPlay src={song.previewUrl} >
                </audio>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton onClick={()=>{is_playing ? setPlaying(false):setPlaying(true); play?setPlay(false):setPlay(true)}} aria-label="play">
                    {is_playing ? <PauseCircleFilledIcon/> : <PlayCircleFilledIcon/> }
                </IconButton>
            </CardActions>
        </Card>
    </Container>
  );
}

export default SingleSongCard