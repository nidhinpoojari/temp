export interface Userlogin {
  email: string,
  password: string

}

export interface userData {
  firstname: string,
  lastname: string,
  email: string,
  contact: number,
  password: string,
  confirmpwd: string,
  //  usergroup :  req.body.usergroup,
  dept_branch_id: number,
  dept_id: number,
  active: number,
  confirmed: number,
  //assoc_role:req.body.assoc_role,
  mod_per_id: number,
  role_perm_id: number


}
