import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { MoonOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { getItemsFromLocalStorage } from "../utils/localStorage";
import { CartContext } from "../context/CartContext";

function Header() {
  const { products } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About", "Home"];

  const handleSignOut = async () => {
    await signOut(auth);
  };
  return (
    <Navbar
      className={`w-full border-b-2 ${
        theme == "light" ? "bg-amber-50 text-black" : "bg-zinc-700 text-white"
      } `}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1725203574074-a33eae85ba71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            }
            className="h-10 w-10 mr-3"
          />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden  sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {user.isLogin ? (
          <div className="flex items-center">
            <h1 className="mr-4 font-medium">{user.userInfo?.email}</h1>

            <Avatar src={user.userInfo?.photoUrl} className="mx-4" />
            <Button onClick={handleSignOut} href="#" variant="flat">
              Logout
            </Button>
          </div>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link to={"/signin"}>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </NavbarItem>
          </>
        )}

        <NavbarItem>
          <Link to={"/cart"}>
            <Badge count={products.length}>
              <ShoppingCartOutlined className="text-2xl" />
            </Badge>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <MoonOutlined
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
