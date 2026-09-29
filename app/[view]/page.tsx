import MissionApp from '../mission-app';
import {notFound} from 'next/navigation';
export default async function Page({params}:{params:Promise<{view:string}>}){const {view}=await params;if(!['response','leaderboard','training','sessions','recordings','ebooks','admin','admin-login','manage-training','manage-sessions','manage-recordings','manage-ebooks'].includes(view))notFound();return <MissionApp/>}
