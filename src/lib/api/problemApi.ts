import axios from 'axios';
import _ from 'lodash';

import host from './util';
import {Problem as ProblemForm} from '../form';


export class ProblemApi {
  public async getProblems(): Promise<ProblemForm[]> {
    const res = await axios.get(`${host}/problems`);
    return res.data.data;
  }
  public async getProblem(id: string): Promise<ProblemForm> {
    const res = await axios.get(`${host}/problems/${id}`);
    return res.data.data[0];
  }
}

const problemApi = new ProblemApi();
export default problemApi;
