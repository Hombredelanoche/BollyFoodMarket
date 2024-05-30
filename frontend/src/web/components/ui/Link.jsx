import NextLink from "next/link";

const Link = ({ styless = false, ...otherProps }) => {
  <NextLink className={{ underline: !styless }} {...otherProps} />;
};

export default Link;
