<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;                        
use App\Http\Controllers\Controller;
use App\Models\Homes;
use App\Models\HomeCommunity;
use App\Models\Communities;
use App\Models\pdf;
use App\HomeAvailable;
use Illuminate\Support\Str;
use App\Models\status;
Use DB;

class HomeController extends Controller
{

    public function HomeHouseList()
    {
        $count=Homes::where('block',1)->count();
        if($count>=3 and $count<6)
        {
            $num=3;
        }
        else if($count>=6 and $count<9)
        {
            $num=6;

        }
        else if($count>9)
        {
            $num=9;
        }
        else if($count<3)
        {
            $num=0;
        }
        $home=Homes::where('block',1)->take($num)->get();
         return $home;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function index(Request $request)
    {
        $status=5;
        $block=5;
        if($request['search'])
        {
            if($request['search']=="Available" || $request['search']=="available"  )
            {
                $status=1;           
            }
            else if($request['search']=="Hold"||$request['search']=="hold")
            {
                $status=3; 
            }
            else if($request['search']=="sold" || $request['search']=="Sold")
            {
                $status=2; 
            }
            else if($request['search']=="under" || $request['search']=="Under")
            {
                $status=4; 
            }
            else if($request['search']=="active" || $request['search']=="Active")
            {
                $block=1; 
            }
            else if($request['search']=="Deactive" || $request['search']=="deactive")
            {
                $block=0; 
            }
            $data ='';
            $data1 ='';
            $homes = Homes::where('title','LIKE','%'.$request['search'].'%')->orWhere('status_id',$status)->orWhere('block',$block)->orderBy('id','desc')->get();
            $count = Homes::where('title','LIKE','%'.$request['search'].'%')->orWhere('status_id',$status)->orWhere('block',$block)->get()->count();
            if($count==0)
            {
                $data1.='<div class="col-md-4"  >
                <a style="text-decoration:none" href="/admin/home/create">
                    <div class="card addcard" style="border:2px dotted #666666; background-color:#e4e4e4; height:360px;">
                    <img class="card-img-top" style="height:120px;margin-top:20%;width:120px;margin-left:31%;" src="https://cdn3.iconfinder.com/data/icons/houses-11/64/131-Houses-Original_house-home-new-add-512.png">
                    <div class="card-body"> <br>
                        <h4 style="text-align:center;margin-top:30px;font-weight:bold;color:darkgray"> ADD NEW HOME</h4>
                    </div>
                    </div>
                </a>
                </div>';
                return $data1;
            }
            $data.='<div class="col-md-4"  >
            <a style="text-decoration:none" href="/admin/home/create">
                <div class="card addcard" style="border:2px dotted #666666; background-color:#e4e4e4; height:353px;">
                <img class="card-img-top" style="height:120px;margin-top:20%;width:120px;margin-left:31%;" src="https://cdn3.iconfinder.com/data/icons/houses-11/64/131-Houses-Original_house-home-new-add-512.png">
                <div class="card-body"> <br>
                    <h4 style="text-align:center;margin-top:30px;font-weight:bold;color:darkgray"> ADD NEW HOME</h4>
                </div>
                </div>
            </a>
            </div>';
            foreach($homes as $ky => $home )
            {
                if($home->status_id==1)
                {
                    $color="#9FD802";
                }
                else if($home->status_id==2)
                {
                    $color="#F80000";
                }
                else if($home->status_id==3)
                {
                    $color="#f3c623";
                }
                else if($home->status_id==4)
                {
                    $color="#47A5A6";
                }
                else
                {
                    $color="#000000";
                }
                $status=status::where('id',$home->status_id)->get()->first();
                $data .=' <div class="col-md-4" >
                <div class="card">
                  <img class="card-img-top" style="height:200px;" src="/uploads/homes/'.$home->featured_image.'">
                  <div class="card-body">
                    <p class="category category__01 " style="background:'.$color.';">'.$status->status.'</p>
                    <h5 style="font-size: 16px;text-align:center;color:#003a8b;"><b>'.$home->title.'</b></h5>';
                     if($home->block==0)
                     {
                        $data.='<div class="container" style="text-align:center;">
                        <a onclick="BlockHomeModal('.$home->id.')" type="button" style="color:white;text-align:center;font-weight:bold; color:#F6454F;" data-id="'.$home->id.'"  ><i class="la la-ban">&nbsp;Deactive</i></a></div> ';
                     }
                    else
                    {
                        $data.='<div class="container" style="text-align:center;">
                        <a onclick="BlockHomeModal('.$home->id.')" type="button" style="color:white;text-align:center;font-weight:bold; color:#2DCC70;" data-id="'.$home->id.'" ><i class="la la-check">&nbsp;Active</i></a></div>';
                    }
    
    
                     $data.='<br><div class="row">
                     <div class ="col-md-6" style="text-align:center;">
                        <a style="color:white;text-align:center;font-weight:bold;"  href="/admin/home/manage/'.$home->id.'" class="btn mr-1 mb-1 btn-block btn-primary"><i class="la la-check-circle"></i> Manage</a> 
                     </div> 
                      
                     <div class ="col-md-6" style="text-align:center;">
                        <button style="color:white;text-align:center;font-weight:bold; background-color:#F6454F;" data-id="'.$home->id.'" data-toggle="modal" data-target="#deleteHome" class="btn mr-1 mb-1 btn-block"><i class="ft-x"></i> Delete</button>  
                    </div>
                    </div>
                     </div>
                </div>
              </div>';
            } 
            return $data ;
        }
        else
        {
            $data ='';
            $homes = Homes::orderBy('id','desc')->get();
            $data.='<div class="col-md-4"  >
            <a style="text-decoration:none" href="/admin/home/create">
                <div class="card addcard" style="border:2px dotted #666666; background-color:#e4e4e4; height:360px;">
                <img class="card-img-top" style="height:120px;margin-top:20%;width:120px;margin-left:31%;" src="https://cdn3.iconfinder.com/data/icons/houses-11/64/131-Houses-Original_house-home-new-add-512.png">
                <div class="card-body"> <br>
                    <h4 style="text-align:center;margin-top:30px;font-weight:bold;color:darkgray"> ADD NEW HOME</h4>
                </div>
                </div>
            </a>
            </div>';
            foreach($homes as $ky => $home )
            {
                if($home->status_id==1)
                {
                    $color="#9FD802";
                }
                else if($home->status_id==2)
                {
                    $color="#F80000";
                }
                else if($home->status_id==3)
                {
                    $color="#f3c623";
                }
                else if($home->status_id==4)
                {
                    $color="#47A5A6";
                }
                else
                {
                    $color="#000000";
                }
                
                $status=status::where('id',$home->status_id)->get()->first();
                $data .=' <div class="col-md-4" >
                <div class="card">
                  <img class="card-img-top" style="height:200px;" src="/uploads/homes/'.$home->featured_image.'">
                  <div class="card-body">
                    <p class="category category__01 " style="background:'.$color.';">'.$status->status.'</p>
                    <h5 style="font-size: 16px;text-align:center;color:#003a8b;"><b>'.$home->title.'</b></h5>';
                     if($home->block==0)
                     {
                        $data.='<div class="container" style="text-align:center;">
                        <a onclick="BlockHomeModal('.$home->id.')" type="button" style="color:white;text-align:center;font-weight:bold; color:#F6454F;" data-id="'.$home->id.'"  ><i class="la la-ban">&nbsp;Deactive</i></a></div> ';
                     }
                    else
                    {
                        $data.='<div class="container" style="text-align:center;">
                        <a onclick="BlockHomeModal('.$home->id.')" type="button" style="color:white;text-align:center;font-weight:bold; color:#2DCC70;" data-id="'.$home->id.'" ><i class="la la-check">&nbsp;Active</i></a></div>';
                    }
    
    
                     $data.='<br><div class="row">
                     <div class ="col-md-6" style="text-align:center;">
                        <a style="color:white;text-align:center;font-weight:bold;"  href="/admin/home/manage/'.$home->id.'" class="btn mr-1 mb-1 btn-block btn-primary"><i class="la la-check-circle"></i> Manage</a> 
                     </div> 
                      
                     <div class ="col-md-6" style="text-align:center;">
                        <button style="color:white;text-align:center;font-weight:bold; background-color:#F6454F;" data-id="'.$home->id.'" data-toggle="modal" data-target="#deleteHome" class="btn mr-1 mb-1 btn-block"><i class="ft-x"></i> Delete</button>  
                    </div>
                    </div>
                     </div>
                </div>
              </div>';
            } 
            return $data ;
        }
       
    }

    public function data()
    {
        return Homes::get();
    }
     

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data=[];
        $featured_img =  time().explode('.',$request['featured-image-name'])[0].'.' . explode('/', explode(':',substr($request['featured-image'],0,strpos(
            $request['featured-image'],';')))[1])[1];  

        \Image::make($request['featured-image'])->save(public_path('uploads\homes\\').$featured_img);
       
        $gallery=$request['gallery'];
        $gallery_name=$request['gallery_name'];
        foreach($gallery as $key => $gal)
        {
            $gal_img =  time().explode('.',$gallery_name[$key])[0].'.' . explode('/', explode(':',substr($gal,0,strpos(
                $gal,';')))[1])[1];  
    
            \Image::make($gal)->save(public_path('uploads\gallery\\').$gal_img);
            array_push($data,$gal_img);
        }
        $this->validate($request,[
            'title'=>'required',
            'description'=>'required',
            'bedroom'=>'required',
            'bathroom'=>'required',
            'garage'=>'required',
            'stories'=>'required',
            'mls'=>'required',
            'area'=>'required',
            'price'=>'required',
            ]);
        Homes::create([
            'title'=>$request['title'],
            'description'=>$request['description'],
            'bedroom'=>$request['bedroom'],
            'bathroom'=>$request['bathroom'],
            'garage'=>$request['garage'],
            'stories'=>$request['stories'],
            'type'=>$request['mls'],
            'builder'=>$request['builder'],
            'area'=>$request['area'],
            'lat'=>$request['lat'],
            'lng'=>$request['lng'],
            'price'=>$request['price'],
            'block'=>1,
            'featured_image'=>$featured_img,
            'gallery'=>implode(',', $data),
            'slug'=>Str::slug($request['title'], '-'),
            'status_id'=> $request['status'],
        ]);
        $home=Homes::where('slug',Str::slug($request['title'], '-'))->get()->first();
        HomeCommunity::create([
            'home_id'=>$home->id,
            'community_id'=>$request['community']
        ]);
        return ['success'=>'Home Successfully Created'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */


    public function uploadPdf(Request $request,$id)
    {   
         
          $file = $request->file('file');
          $name = $file->getClientOriginalName(); // getting image extension
          $extension = $file->getClientOriginalExtension(); // getting image extension
          $filename =time().$name.'.'.$extension;
          $file->move('uploads/Broucher/', $filename);

        pdf::create([
            'home_id'=>$id,
            'pdf'=>$filename,
        ]);
        return ['uploaded'];
    }
    


    public function show($id)
    {
        $home= Homes::where('id',$id)->get()->first();
        $community=HomeCommunity::where('home_id',$id)->orderBy('updated_at','desc')->get()->first();
           $temp = array(
                "title" =>$home->title,
                "description" =>$home->description,
                "bedroom" =>$home->bedroom,
                "bathroom" =>$home->bathroom,
                "garage" =>$home->garage,
                "stories" =>$home->stories,
                "type" =>$home->type,
                "area" =>$home->area,
                "builder" =>$home->builder,
                "status" =>$home->status_id,
                "price" =>$home->price,
                "lat" =>$home->lat,
                "lng" =>$home->lng,
                "community_list"=>$community->community_id,
             );
                return $temp;
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    



    public function update(Request $request, $id)
    {
        
        $home =  Homes::whereId($id)->first();
        if($request['featured-image-name']=="a")
        {
            $featured_img=$home->featured_image;

        }
        else 
        {
            $featured_img =  time().explode('.',$request['featured-image-name'])[0].'.' . explode('/', explode(':',substr($request['featured-image'],0,strpos(
                $request['featured-image'],';')))[1])[1];  
    
            \Image::make($request['featured-image'])->save(public_path('uploads\homes\\').$featured_img);
       
           
        }

        
        $this->validate($request,[
            'title'=>'required',
            'description'=>'required',
            'bedroom'=>'required',
            'bathroom'=>'required',
            'garage'=>'required',
            'stories'=>'required',
            'mls'=>'required',
            'area'=>'required',
            'builder'=>'required',
            'status'=>'required',
            'lat'=>'required',
            'lng'=>'required',
            'price'=>'required',
            ]);
        Homes::where('id',$id)->update([
            'title'=>$request['title'],
            'description'=>$request['description'],
            'bedroom'=>$request['bedroom'],
            'bathroom'=>$request['bathroom'],
            'garage'=>$request['garage'],
            'stories'=>$request['stories'],
            'type'=>$request['mls'],
            'area'=>$request['area'],
            'builder'=>$request['builder'],
            'status_id'=>$request['status'],
            'lat'=>$request['lat'],
            'lng'=>$request['lng'],
            'price'=>$request['price'],
            'featured_image'=>$featured_img,
            'slug'=>Str::slug($request['title'], '-'),
        ]);

        $home=Homes::where('slug',Str::slug($request['title'], '-'))->get()->first();
        HomeCommunity::where('home_id',$id)->update([
            'home_id'=>$home->id,
            'community_id'=>$request['community']
        ]);
        return ['success'=>'Home Successfully Edit'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {  
        $home = Homes::findOrFail($id);
        $home->delete();   
        DB::table('home_communities')->where('home_id',$id)->delete();
        DB::table('features')->where('home_id',$id)->delete();   
        DB::table('floors')->where('home_id',$id)->delete();   
        return ['success'=>'Home Successfully Deleted'];
    }

    public function Available(Request $request)
    { 
        $this->validate($request,[
            'home_id'=>'required',
            'lat'=>'required',
            'lng'=>'required',
            ]);
        HomeAvailable::create([
            'home_id'=>$request['home_id'],
            'lat'=>$request['lat'],
            'lng'=>$request['lng'],
        ]);
        return "success";
    }
    public function Availableupdate(Request $request ,$id)
    { 
        $this->validate($request,[
            'lat'=>'required',
            'lng'=>'required',
            ]);
        HomeAvailable::where('id',$id)->update([
            'lat'=>$request['lat'],
            'lng'=>$request['lng'],
        ]);
        return "success";
    }
    public function HomeBlock($id)
    { 
        $home = Homes::where('id',$id)->get()->first();
        if($home->block==0)
        {
            $block=1;
        }
        else
        {
            $block=0;
        }
        Homes::where('id',$id)->update([
            'block'=>$block
        ]);
        return "success";
    }
}
