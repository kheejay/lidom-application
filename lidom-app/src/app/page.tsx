import { createClient } from "@/src/app/supabase/server";;
import styles from "@/src/app/page.module.css";
import LoginPage from "./loginpage/page";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  );
}
