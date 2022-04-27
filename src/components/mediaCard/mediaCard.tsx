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
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 20
  },
  media: {
    height: 200,
  },
});

type MediaCardProps={song:Song, songIesimo:(_:number)=>void};
const MediaCard: FC<MediaCardProps>=({song, songIesimo})=> {
    const [is_elev, setElev]=useState(2 as 2|13)
    const classes = useStyles();

  return (
    <Card onClick={()=>{songIesimo(song.artistId) }} elevation={is_elev} onMouseEnter={()=>setElev(13)} onMouseLeave={()=>setElev(2)} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={song.artworkUrl100}
          title={song.artistName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
           {song.trackName}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
           {song.artistName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              <span>
              {song.primaryGenreName} - {song.releaseDate}
              </span>
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default MediaCard