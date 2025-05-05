import { Link as ReactRouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface BlogPostCardProps {
  cardParms: {
    id: number;
    title: string;
    description: string;
  };
}

export default function BlogPostCard({ cardParms }: BlogPostCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        minWidth: "100%",
      }}
    >
      <CardActionArea
      component={ReactRouterLink}
      to={`/post/${cardParms.id}`}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {cardParms.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {cardParms.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
