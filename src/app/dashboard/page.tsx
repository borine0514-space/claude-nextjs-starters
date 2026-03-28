import { ArrowUp, Users, TrendingUp, Activity } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground mt-2">
          애플리케이션 통계 및 활동을 확인하세요.
        </p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: Users,
            title: '총 사용자',
            value: '12,543',
            change: '+12%',
            positive: true,
          },
          {
            icon: Activity,
            title: '활성 세션',
            value: '2,847',
            change: '+5%',
            positive: true,
          },
          {
            icon: TrendingUp,
            title: '수익',
            value: '$45,231',
            change: '+23%',
            positive: true,
          },
          {
            icon: ArrowUp,
            title: '전환율',
            value: '3.24%',
            change: '-2%',
            positive: false,
          },
        ].map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <Badge variant={stat.positive ? 'default' : 'destructive'} className="mt-2">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 최근 활동 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>최근 활동 이력을 확인하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>활동</TableHead>
                <TableHead>시간</TableHead>
                <TableHead>상태</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  user: 'John Doe',
                  activity: '프로필 업데이트',
                  time: '2시간 전',
                  status: '완료',
                },
                {
                  user: 'Jane Smith',
                  activity: '새 프로젝트 생성',
                  time: '4시간 전',
                  status: '완료',
                },
                {
                  user: 'Mike Johnson',
                  activity: '파일 업로드',
                  time: '6시간 전',
                  status: '진행 중',
                },
                {
                  user: 'Sarah Williams',
                  activity: '설정 변경',
                  time: '1일 전',
                  status: '완료',
                },
              ].map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.user}`}
                        />
                        <AvatarFallback>
                          {item.user.split(' ')[0]?.[0] ?? '?'}
                          {item.user.split(' ')[1]?.[0] ?? ''}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{item.user}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {item.activity}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {item.time}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === '완료' ? 'default' : 'secondary'
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
