/* eslint-disable no-unused-vars */
import { IAddress } from './address';
import { IProjectOwner } from './project-owner'
import { ITag } from './tag';


export interface IProject {
  id: string;
  title: string;
  projectInfo: string;
  account: string;
  projectOwner: IProjectOwner;
  address: IAddress;
  website?: string;
  accountInformation: string;
  searchingFor: string;
  totalHours: string;
  start: string;
  causeTags: ITag;
  skillTags: ITag;
  logo?: string;
  pictureUrl?: string;
  live?: boolean;
  matched?: boolean;
  completed: boolean;
  professionalId?: string;
}