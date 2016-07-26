import { ShareInfo } from './shareInfo';
export var SHARES: ShareInfo[] = [
{
  'id': 2,
  'source': {
    'id': 1,
    'name': 'Ned Stark',
    'email': 'ned@test.com',
    'picture': 'picture.com/ned',
    'role': 'Father',
    'organization': 'Stark',
    'relationship': 'Teacher/Mentor'
  },
  'target': {
    'id': 4,
    'name': 'Arya Stark',
    'role': 'Daughter',
    'organization': 'Stark',
    'relationship': ''
  },
  'startMonth': '4',
  'startYear': '2016',
  'endMonth': '',
  'endYear': ''
},
{
  'id': 3,
  'source': {
    'id': 1,
    'name': 'Ned Stark',
    'email': 'ned@test.com',
    'picture': 'picture.com/ned',
    'role': 'Father',
    'organization': 'Stark',
    'relationship': 'Teacher/Mentor'
  },
  'target': {
    'id': 4,
    'name': 'Manolo Stark',
    'role': 'Son',
    'organization': 'Stark',
    'relationship': ''
  },
  'startMonth': '4',
  'startYear': '2016',
  'endMonth': '',
  'endYear': ''
}
];
