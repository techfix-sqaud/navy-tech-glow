
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, MessageSquare, Briefcase, Calendar, Mail, Phone, User } from 'lucide-react';

// Mock data - in a real app, this would come from a database
const consultationRequests = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Startup Inc',
    service: 'Smart Home',
    budget: '$10,000 - $25,000',
    message: 'Looking to automate our office space with smart lighting and security systems.',
    status: 'new',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
    phone: '+1 (555) 987-6543',
    company: 'Digital Solutions LLC',
    service: 'Web Development',
    budget: '$5,000 - $10,000',
    message: 'Need a modern e-commerce website with payment integration.',
    status: 'contacted',
    createdAt: '2024-01-14T14:20:00Z'
  }
];

const projectRequests = [
  {
    id: 1,
    name: 'Mike Davis',
    email: 'mike@business.com',
    phone: '+1 (555) 456-7890',
    company: 'Davis Enterprises',
    projectType: 'Full Development',
    timeline: '3-6 months',
    budget: '$50,000+',
    description: 'Complete business automation system with mobile app and web dashboard.',
    status: 'new',
    createdAt: '2024-01-16T09:15:00Z'
  }
];

const AdminDashboard = () => {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateStatus = (id: number, newStatus: string, type: 'consultation' | 'project') => {
    // In a real app, this would update the database
    console.log(`Updating ${type} request ${id} to status: ${newStatus}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage consultation requests and project inquiries
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Consultations</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{consultationRequests.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Project Requests</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projectRequests.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Requests</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {[...consultationRequests, ...projectRequests].filter(r => r.status === 'new').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="consultations" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="consultations">Consultation Requests</TabsTrigger>
            <TabsTrigger value="projects">Project Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="consultations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {consultationRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.name}</TableCell>
                        <TableCell>{request.company}</TableCell>
                        <TableCell>{request.service}</TableCell>
                        <TableCell>{request.budget}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(request.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedRequest({...request, type: 'consultation'})}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Project Type</TableHead>
                      <TableHead>Timeline</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projectRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.name}</TableCell>
                        <TableCell>{request.company}</TableCell>
                        <TableCell>{request.projectType}</TableCell>
                        <TableCell>{request.timeline}</TableCell>
                        <TableCell>{request.budget}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(request.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => setSelectedRequest({...request, type: 'project'})}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Request Details Modal would go here */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {selectedRequest.type === 'consultation' ? 'Consultation Request' : 'Project Request'} Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold">Name:</label>
                    <p>{selectedRequest.name}</p>
                  </div>
                  <div>
                    <label className="font-semibold">Company:</label>
                    <p>{selectedRequest.company}</p>
                  </div>
                  <div>
                    <label className="font-semibold">Email:</label>
                    <p className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {selectedRequest.email}
                    </p>
                  </div>
                  <div>
                    <label className="font-semibold">Phone:</label>
                    <p className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {selectedRequest.phone}
                    </p>
                  </div>
                </div>
                
                <div>
                  <label className="font-semibold">
                    {selectedRequest.type === 'consultation' ? 'Message:' : 'Description:'}
                  </label>
                  <p className="mt-1 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    {selectedRequest.message || selectedRequest.description}
                  </p>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={() => updateStatus(selectedRequest.id, 'contacted', selectedRequest.type)}
                    variant="outline"
                  >
                    Mark as Contacted
                  </Button>
                  <Button 
                    onClick={() => updateStatus(selectedRequest.id, 'in-progress', selectedRequest.type)}
                    variant="outline"
                  >
                    Mark as In Progress
                  </Button>
                  <Button 
                    onClick={() => setSelectedRequest(null)}
                    variant="outline"
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
