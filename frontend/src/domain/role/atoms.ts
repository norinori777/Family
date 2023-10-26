import { selector } from 'recoil'
import axios from 'axios'
import { RoLeList, Role } from './types'

export const masterRoleQuery = selector<RoLeList>({
  key: 'masterRole',
  get: async () => {
    try {
      const response = await axios.get(`/roll/list`)
      const roles: Role[] = response.data.data
      const roleList: RoLeList = roles.map((role) => {
        return {
          value: role.roleId,
          label: role.roleName,
        }
      })
      return roleList
    } catch (error) {
      console.error(error)
      return []
    }
  },
})
