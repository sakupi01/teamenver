import * as GetApproversApi from '@/api/get/approvers/route'
export const mockGetApproversResponse: GetApproversApi.GetType = {
  'agreements': [
    {
      'user': { 'name': 'example', 'id': '0' },
      'is_agreed': true,
    },
    {
      'user': { 'name': 'example2', 'id': '1' },
      'is_agreed': false,
    },
  ],
}
