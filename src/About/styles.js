import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  aboutImg: {
    width: "100%",
  },
  imgWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionMargin: {
    marginTop: "8rem",
  },
  normalMargin: {
    marginTop: "2rem",
  },
  standardMargin: {
    marginTop: "5rem",
  },
  aboutWrapper: {
    paddingRight: "2rem",
    marginBottom: "6rem",
  },
  emailWrapper: { paddingLeft: "2rem" },
  sendButton: {
    color: "white",
    marginTop: "2rem",
  },
  emailStyle: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
     height: "100%"
  }
}));
