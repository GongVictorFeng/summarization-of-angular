import * as express from 'express';
import * as cors from 'cors';
import { Application } from 'express';
import { saveCourse } from './server/save-course.route';
import { getAllCourses } from './server/get-courses.route';

const bodyParser = require('body-parser');

const app: Application = express();
app.use(bodyParser.json());
app.use(cors());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);
const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});
