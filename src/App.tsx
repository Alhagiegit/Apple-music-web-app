import React, { useState, useEffect } from 'react';
import './App.css';
import PrimarySearchAppBar from './components/navigation/navigation';
import { ItunesResponce, Song } from './Models/music';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './components/mediaCard/mediaCard';
import Skeleton from '@mui/material/Skeleton';
import SingleSongCard from './components/song/song';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


function App() {
  const classes = useStyles();
  const [songs, setSongs]=useState<Song[]|null>(null);
  let [is_loading, setLoading]=  useState<boolean>(false)
  const [singleSong, setSingleSong]=useState<Song|null>(null)
    const getData= async (song:string) =>{
      const responceFetch= await fetch(`https://itunes.apple.com/search?term=${song}`);
        const {results}= await responceFetch.json() as ItunesResponce;
        setSongs(results)
        console.log(results)
         setLoading(true)
  }

  const onClickPlay=(id:number)=>{
      if(!songs) return;
      // const index=songs.findIndex(({artistId:idSong})=>id===idSong);
      if(songs!==null){
       const result = songs.find((song)=>song.artistId===id)
          result && setSingleSong(result);
       
      }

  }

useEffect( ()=>{
  setTimeout(()=>{
   getData("lucky Dube")
  }, 3000)
  }, [])


  return (
    <>
      <PrimarySearchAppBar searchSong={getData}/>
        { singleSong ? <SingleSongCard  song={singleSong} />:null}
      <Container fixed className="main">
        {!is_loading? 
          <div className={classes.root}>
              <Grid container spacing={3}>
                {Array.from({length: 8}, (_, index) => 
                <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
                    <span key={index} className='singleSkeleton'>
                      <Skeleton animation="wave"   variant="rectangular" width={300} height={300} />
                      <Skeleton animation="wave"  variant="text" width={210} height={20} />
                      <Skeleton animation="wave"  variant="text" width={150} height={20} />
                    </span>  
                </Grid>
                  )}
              </Grid>       
          </div>:
            <div className={classes.root}>
              <Grid container spacing={3}>
                  {songs && songs.map((song, index)=>(
                      <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
                          <MediaCard  song={song} songIesimo={onClickPlay}/>
                      </Grid>
                  )
                  )}
              </Grid>       
            </div>

        }
    </Container>
  </>
  );
}

export default App;
