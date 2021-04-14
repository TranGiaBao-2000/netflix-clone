import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList({ tileData }) {
  const classes = useStyles();
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.id} className="item">
            <NavLink to={`/movie-detail/${tile.id}`}>
              <img
                src={
                  tile.backdrop_path
                    ? baseImgUrl + tile.backdrop_path
                    : `http://haiphongtours.vn/wp-content/uploads/2016/10/no-image-available.jpg`
                }
                alt={tile.title}
              />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Release day: {tile.release_date}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </NavLink>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
