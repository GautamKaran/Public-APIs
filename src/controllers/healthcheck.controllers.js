const healthcheck = (_, res) => {
  return res.status(200).json({ message: "Welcome to Public APIs" });
};

export { healthcheck };
