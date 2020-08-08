import app from './app';

const port: number = 3333;

app.listen(port, () =>
  console.log(`Server listening on port: ${process.env.PORT || port}`)
);
