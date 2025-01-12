import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { logUserOut } from "../../lib/auth";
import { useNavigate } from "react-router-dom";
import { userInfoType } from "../Navbar";

export interface AvatarProps {
  name: string;
  src?: string;
  email: string;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInfo : React.Dispatch<React.SetStateAction<userInfoType | null>>
}

const NavbarAvatar = ({name, src, email, setUserInfo, setIsLoggedIn}: AvatarProps) => {
  const navigate = useNavigate()
  return (
    <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={name}
              size="sm"
              src={src}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onPress={() => {
              if (logUserOut()) {
                navigate('/')
                setIsLoggedIn(false)
                setUserInfo(null)
              }
              
              }}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  )
}

export default NavbarAvatar
