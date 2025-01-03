import { ThemeSwitcher } from "@/components/theme-switcher";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/lib/backend";

const Header = () => {
  return (
    <header
      className={`
        z-100
        min-h-12 h-12 max-h-12
        min-w-full w-full max-w-full
        fixed top-0 left-0 right-0
        px-4
        flex flex-row items-center justify-between
        bg-background
      `}
    >
      {/* bg-gradient-to-b from-white via-gray-50 to-gray-50 */}
      <ThemeSwitcher />
      {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
    </header>
  );
};

export default Header;