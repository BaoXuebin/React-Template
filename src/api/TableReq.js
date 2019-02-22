import { fetch } from './Req';
import Top250 from '../test/top250.json';

export const fetchDoubanTop250 = ({ pageNo, pageSize }) => fetch(`/v2/movie/top250?start=${(pageNo - 1) * pageSize}&count=${pageSize}`);