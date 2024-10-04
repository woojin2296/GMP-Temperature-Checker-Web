import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // 요청 URL에서 쿼리 파라미터 추출
    const { searchParams } = new URL(request.url);
    const from = searchParams.get("from"); // 예: "2024-10-01T00:00:00"
    const to = searchParams.get("to");     // 예: "2024-10-05T23:59:59"

    if (!from || !to) {
      return NextResponse.json({ error: "from 및 to 날짜를 지정해야 합니다." }, { status: 400 });
    }

    // SQLite 데이터베이스 연결
    const db = await open({
      filename: './database/ThermoHygrometer.db',
      driver: sqlite3.Database,
    });

    // SQL 쿼리 실행: 지정된 날짜 범위의 데이터를 타임스탬프 기준으로 정렬하여 가져오기
    const query = `
      SELECT timestamp, refrigerator_temp, refrigerator_humid, freezer_temp, freezer_humid
      FROM sensor_data
      WHERE timestamp >= ? AND timestamp <= ?
      ORDER BY timestamp ASC
    `;

    // `from`과 `to` 날짜를 파라미터로 전달하여 쿼리 실행
    const rows = await db.all(query, [from, to]);
    await db.close();

    return NextResponse.json(rows);
  } catch (error) {
    console.error("데이터 로드 오류:", error);
    return NextResponse.json({ error: "데이터 로드 중 오류가 발생했습니다." }, { status: 500 });
  }
}