import { Repository } from "typeorm";
import { Poll } from "../entities/Poll";

export class PollRepository extends Repository<Poll> {}
