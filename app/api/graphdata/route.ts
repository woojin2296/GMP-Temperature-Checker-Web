import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // SQLite 데이터베이스 연결
    const db = await open({
      filename: './database/ThermoHygrometer.db',
      driver: sqlite3.Database,
    });

    // 최근 30개의 데이터를 타임스탬프 기준으로 가져오기 (최신순으로 정렬)
    const query = `
      SELECT timestamp, refrigerator_temp, refrigerator_humid, freezer_temp, freezer_humid 
      FROM sensor_data 
      ORDER BY timestamp DESC 
      LIMIT 30
    `;

    // 쿼리 실행
    const rows = await db.all(query);

    await db.close();

    const sortedRows = rows.reverse();

    return NextResponse.json(sortedRows);
  } catch (error) {
    return NextResponse.json([]);
  }
}